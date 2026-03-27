import { createServerClient } from '@supabase/ssr';

export function createSupabaseServerClient(context: {
  cookies: {
    get(name: string): { value: string } | undefined;
    set(name: string, value: string, options: Record<string, unknown>): void;
    delete(name: string, options: Record<string, unknown>): void;
  };
}) {
  return createServerClient(
    import.meta.env.PUBLIC_SUPABASE_URL ?? '',
    import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '',
    {
      cookies: {
        get(name) {
          return context.cookies.get(name)?.value;
        },
        set(name, value, options) {
          context.cookies.set(name, value, options);
        },
        remove(name, options) {
          context.cookies.delete(name, options);
        },
      },
    },
  );
}
