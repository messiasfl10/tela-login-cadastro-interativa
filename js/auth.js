// import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://pzgrshdabbvlhdzxtteq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_d5kny18lr9mMaCakx5lHOA_PGT_9ezh';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function signup(email, password, name) {
  try {
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { name: name } } });
    if (error) throw new Error(error.message);
    return { success: true, user: data.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function login(email, password) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
    return { success: true, user: data.user };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}