import { fetchPostsPerPage } from '@/lib/pagination'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string,
  postListRefactored?: Post[],
  paginationData?: Pagination
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { per_page, page , order } = req.query

    if (!per_page || !page) {
      res.status(400).json({ message: 'Invalid input!' })
    }
    const { postListRefactored, paginationData } = await fetchPostsPerPage(+page!, +per_page!)
    res.status(200).json({ postListRefactored, paginationData })
}