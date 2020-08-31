const Generator = require('yeoman-generator')
const chalk = require('chalk')
const { join } = require('path')

module.exports = class extends Generator {
  initializing() {
    this.props = {}
  }

  async prompting() {
    this.log(
      chalk.bold(
        `Creating the scaffolding of lepont bridge into ${chalk.magenta(
          'the current directory'
        )}.`
      )
    )

    const answer = await this.prompt({
      type: 'confirm',
      name: 'yes',
      message: 'Are you sure you want to proceed?',
    })

    if (!answer.yes) {
      this.log('Exit')
      process.exit(1)
      return
    }

    const props = await this.prompt([
      {
        type: 'input',
        name: 'packageName',
        message: 'Enter the package name',
        default: 'my-lepont-bridge',
      },
      {
        type: 'input',
        name: 'exportName',
        message: 'Enter the export name',
        default: 'MyLepontBridge',
      },
    ])

    this.props = props
  }

  writing() {
    const root = this.destinationRoot()

    this.fs.copyTpl(
      this.templatePath('README.md'),
      join(root, 'README.md'),
      this.props
    )

    this.fs.copyTpl(
      this.templatePath('package.json'),
      join(root, 'package.json'),
      this.props
    )

    ;[
      'README.md',
      'package.json',
      'tsconfig.json',
      '.gitignore',
      'bridge/index.d.ts',
      'bridge/index.js',
    ].forEach((filename) => {
      this.fs.copyTpl(
        this.templatePath(filename),
        join(root, filename),
        this.props
      )
    })
  }
}
