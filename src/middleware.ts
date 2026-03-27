import { defineMiddleware } from 'astro:middleware';
import { createSupabaseServerClient } from './lib/supabase/server';

export const onRequest = defineMiddleware(async (context, next) => {
  const supabase = createSupabaseServerClient(context);
  const { data } = await supabase.auth.getUser();

  context.locals.supabase = {
    userId: data.user?.id ?? null,
    email: data.user?.email ?? null,
  };

  return next();
});
