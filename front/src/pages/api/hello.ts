// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export interface ToDo {
  id: string;
  title: string;
  detail: string;
  update_at: string;
  create_at: string;
}

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
