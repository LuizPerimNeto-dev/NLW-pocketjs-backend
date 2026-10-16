import { z } from 'zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { deleteGoal } from '../../functions/delete-goal'

export const deleteGoalRoute: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/goals/:goalId',
    { schema: { params: z.object({ goalId: z.string() }) } },
    async request => {
      await deleteGoal({ goalId: request.params.goalId })
    }
  )
}