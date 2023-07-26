export const config = {
  saltRounds: process.env.SALT_ROUNDS || 10
} as const;
