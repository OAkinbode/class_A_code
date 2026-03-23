import { supabase } from "./supabase";
export const readAllDocumentsSupabase = async (tableName: string) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select(`name , id, player_1(visitor_name)`);
    if (error) throw error;
    console.log("Data fetched from Supabase: ", data);
    return data;
  } catch (error) {
    console.error("Error reading documents: ", error);
    throw error;
  }
};

export const readDocumentSupabase = async (tableName: string, id: string) => {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error reading document: ", error);
    throw error;
  }
};
