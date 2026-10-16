import { eq } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'

export async function deleteGoal({ goalId }: { goalId: string }) {
  await db.delete(goalCompletions).where(eq(goalCompletions.goalId, goalId))
  await db.delete(goals).where(eq(goals.id, goalId))
}