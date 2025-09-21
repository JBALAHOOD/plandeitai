
import { GoogleGenAI, Type } from "@google/genai";
import type { UserData, MealPlan } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const mealPlanSchema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.OBJECT,
      properties: {
        totalCalories: { type: Type.NUMBER, description: "Total calories for the day." },
        protein: { type: Type.NUMBER, description: "Total protein in grams." },
        carbs: { type: Type.NUMBER, description: "Total carbohydrates in grams." },
        fat: { type: Type.NUMBER, description: "Total fat in grams." },
      },
    },
    meals: {
      type: Type.OBJECT,
      properties: {
        breakfast: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
            instructions: { type: Type.STRING },
          },
        },
        lunch: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
            instructions: { type: Type.STRING },
          },
        },
        dinner: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
            instructions: { type: Type.STRING },
          },
        },
        snacks: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            ingredients: { type: Type.ARRAY, items: { type: Type.STRING } },
            instructions: { type: Type.STRING },
          },
        },
      },
    },
  },
};


export const generateMealPlan = async (userData: UserData): Promise<MealPlan> => {
    const { goal, age, gender, currentWeight, targetWeight, activityLevel, dietaryPreference } = userData;

    const prompt = `
    You are an expert nutritionist. Create a personalized one-day meal plan for a user with the following details:
    - Goal: ${goal}
    - Age: ${age}
    - Gender: ${gender}
    - Current Weight: ${currentWeight} kg
    - Target Weight: ${targetWeight} kg
    - Activity Level: ${activityLevel}
    - Dietary Preference: ${dietaryPreference}

    First, calculate the user's estimated daily calorie needs based on their goal. Use the Mifflin-St Jeor equation for BMR, then apply the activity multiplier, and adjust for the weight goal (e.g., a 300-500 calorie deficit for weight loss, or a 300-500 calorie surplus for weight gain/muscle building).

    Then, generate a balanced and healthy one-day meal plan that meets these calorie and macronutrient targets.
    The plan should include breakfast, lunch, dinner, and one healthy snack.
    For each meal, provide a creative and appetizing meal name, a list of ingredients with quantities, and simple preparation instructions.
    
    Finally, provide a summary of the total estimated calories, and macronutrient breakdown (protein, carbs, fat) in grams for the entire day.
    Ensure the generated plan is consistent with the user's dietary preference.
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: mealPlanSchema,
            },
        });
        
        const jsonText = response.text;
        const parsedPlan = JSON.parse(jsonText);
        
        return parsedPlan as MealPlan;
    } catch (error) {
        console.error("Error generating meal plan:", error);
        throw new Error("Failed to generate meal plan. Please try again.");
    }
};
