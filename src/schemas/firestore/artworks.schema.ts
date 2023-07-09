import { z } from 'zod'

export const artworksSchema = z.object({
  alt: z.string(),
  title: z.string(),
  url: z.string(),
})

export type ArtworksSchema = z.infer<typeof artworksSchema>
