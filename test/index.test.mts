// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, expect, suite, test } from 'vitest'
import { isGitRepo, isGitRepoSync } from '../src/index.mts'

describe('🧪 Is Git repo tests tests 🧪', () => {
  suite('isGitRepoSync()', () => {
    test('#1 should be true', () => {
      assert.isTrue(isGitRepoSync())
    }) // #1

    test('#2 should be true', () => {
      assert.isTrue(isGitRepoSync({ directory: './test/is-git-no-url' }))
    }) // #2

    test('#3 should be true', () => {
      assert.isTrue(isGitRepoSync({ directory: './test/is-git-with-url' }))
    }) // #3

    test('#4 should throw', () => {
      assert.throws(() => {
        isGitRepoSync({ directory: './fake-path-not-possible' })
      })
    }) // #4
  })

  suite('isGitRepo()', () => {
    test('#5 should be true', async () => {
      const result: boolean = await isGitRepo()

      assert.isTrue(result)
    }) // #5

    test('#6 should be true', async () => {
      assert.isTrue(await isGitRepo({ directory: './test/is-git-no-url' }))
    }) // #6

    test('#7 should be true', async () => {
      const result: boolean = await isGitRepo({
        directory: './test/is-git-with-url'
      })

      assert.isTrue(result)
    }) // #7

    test('#8 should throw', async () => {
      await expect(
        isGitRepo({ directory: './fake-path-not-possible' })
      ).rejects.toThrowError()
    }) // #8
  })
})
