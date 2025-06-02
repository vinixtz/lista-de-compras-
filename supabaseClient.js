// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://wueqgnysdtvdtgvjtlyy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1ZXFnbnlzZHR2ZHRndmp0bHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NjYsImV4cCI6MjA2MjExMTY2Nn0.iwASgVlh3EMi_5z0nC8CUxj4AYcakk6_nYbwFZcdTN8'
)