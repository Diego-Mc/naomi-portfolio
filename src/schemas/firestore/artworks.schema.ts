import { z } from 'zod'

export const artworksSchema = z.object({
  alt: z.string(),
  title: z.string(),
  tagGroup: z.enum(['animations', 'comics', 'drawings']),
  url: z.string().optional(),
  urls: z.array(z.string()).optional(),
})

export type ArtworksSchema = z.infer<typeof artworksSchema>
