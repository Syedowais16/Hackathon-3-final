import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skJHJRJcYy9hmE9Xfvmk74MUxyq0cCmAvIRPqFXu8IOSxOhZKBT61HY5UsbUDftwGwSlIq2h0Gw3PLPPUfG64t9unsuFm8euLHXOxgrR8233RTUAoPGsVqzFvY0T5BBNv2ZKwdzqm7dAuzKAhlx6cla0lvLoi1NGWj4v8tVv5FF6J5zuh4gI"
})