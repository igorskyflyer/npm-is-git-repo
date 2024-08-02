// Author: Igor Dimitrijević (@igorskyflyer)

import type { ExecResult } from '@igor.dvlpr/simple-exec'
import { executeSync } from '@igor.dvlpr/simple-exec'
import { existsSync } from 'node:fs'

interface IOptions {
  directory?: string
}

/**
 * Asynchronously checks if a local directory is a Git repository.
 * @param options Optional object with options:
 *
 * - `directory` - Sets the current working directory, otherwise the current directory will be used instead.
 *
 * @throws Will throw an error if the passed directory is not valid or does not exist.
 * @returns A Boolean indicating whether provided local directory is a Git repository.
 * @since v1.0.0
 */
export async function isGitRepo(options?: IOptions): Promise<boolean> {
  return Promise.resolve(isGitRepoSync(options))
}

/**
 * Synchronously checks if a local directory is a Git repository.
 * @param options Optional object with options:
 *
 * - `directory` - Sets the current working directory, otherwise the current directory will be used instead.
 *
 * @throws Will throw an error if the passed directory is not valid or does not exist.
 * @returns A Boolean indicating whether provided local directory is a Git repository.
 * @since v1.0.0
 */
export function isGitRepoSync(options?: IOptions): boolean {
  const directory: string = options?.directory ?? '.'

  if (typeof directory !== 'string' || directory.length === 0) {
    throw new Error('Invalid directory path.')
  }

  if (directory.length > 1 && !existsSync(directory)) {
    throw new Error('The directory does not exist.')
  }

  try {
    const command: ExecResult = executeSync(
      `git -C ${directory} rev-parse --is-inside-work-tree`
    )

    if (command.error) {
      return false
    }

    const result: string = command.output.trim()

    return result === 'true'
  } catch {
    return false
  }
}
