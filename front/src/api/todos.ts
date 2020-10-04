// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export interface ToDo {
  id: string;
  title: string;
  detail: string;
  update_at: string;
  create_at: string;
}

const data: ToDo[] = [1, 2, 3, 4, 5].map((v) => ({
  id: `key_${v}`,
  title: `toto_${v}`,
  detail: `ちょっと頑張る${v}`,
  update_at: new Date().toISOString(),
  create_at: new Date().toISOString(),
}));

export default data;
