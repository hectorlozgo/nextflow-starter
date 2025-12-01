import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'chore',
        'docs',
        'refactor',
        'style',
        'test',
        'ci',
        'revert'
      ]
    ],
    'header-max-length': [1, 'always', 72],
    'subject-case': [0]
  }
}

export default Configuration
