export { GET, POST } from 'app/auth';
console.log("========= ENV CHECK =========");
Object.keys(process.env).forEach((key) => {
  const value = process.env[key as keyof NodeJS.ProcessEnv];
  console.log(`${key}: ${value}`);
});
console.log("=============================");
console.log("===== ENV VARS =====");
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY);
console.log("AUTH_SECRET:", process.env.AUTH_SECRET);
console.log("POSTGRES_URL:", process.env.POSTGRES_URL);
console.log("POSTGRES_PRISMA_URL:", process.env.POSTGRES_PRISMA_URL);
console.log("POSTGRES_URL_NON_POOLING:", process.env.POSTGRES_URL_NON_POOLING);
console.log("NEXT_PUBLIC_SITE_URL:", process.env.NEXT_PUBLIC_SITE_URL);
console.log("=====================");
console.log("==== ENV VARS BEGIN ====");
console.log("DATABASE_URL:", process.env.DATABASE_URL);
console.log("NEXTAUTH_URL:", process.env.NEXTAUTH_URL);
console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY);
console.log("AUTH_SECRET:", process.env.AUTH_SECRET);
console.log("POSTGRES_URL:", process.env.POSTGRES_URL);
console.log("POSTGRES_PRISMA_URL:", process.env.POSTGRES_PRISMA_URL);
console.log("POSTGRES_URL_NON_POOLING:", process.env.POSTGRES_URL_NON_POOLING);
console.log("==== ENV VARS END ====");
