
export interface UserData {
  goal: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other' | '';
  currentWeight: number;
  targetWeight: number;
  activityLevel: string;
  dietaryPreference: string;
}

export interface Meal {
  name: string;
  ingredients: string[];
  instructions: string;
}

export interface MealPlan {
  summary: {
    totalCalories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  meals: {
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snacks: Meal;
  };
}

export interface SavedMealPlan extends MealPlan {
  id: string;
  savedAt: string;
  goal: string;
}
