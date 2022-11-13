export type user = {
  id: string;
  email: string;
  password: string;
  name: string;
};

export type recipe = {
  id: string;
  title: string;
  description: string;
  created_at: Date;
};

export interface UserInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface RecipeInputDTO {
  title: string;
  description: string;
  created_at: Date;
  token: string;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface EditUserInputDTO {
  name: string;
  id: string;
  token: string;
}

export interface EditUserInput {
  name: string;
  id: string;
}

export interface AuthenticationData {
  id: string;
}

export interface GetUserDTO {
  token: string;
}

export interface GetUserByIdDTO {
  id: string;
  token: string;
}

export interface GetRecipeByIdDTO {
  id: string;
  token: string;
}
