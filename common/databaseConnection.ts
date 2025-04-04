// common/databaseConnection.ts
export interface QueryResult {
    rows: any[];
  }
  
  export const db = {
    query: async (sql: string, params: any[]): Promise<QueryResult> => {
      // In production, this would interact with a real DB
      return { rows: [] };
    }
  };
  