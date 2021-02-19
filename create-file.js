/*
 * fast add new module script
 */

const inquirer = require('inquirer')
// 删除validate函数后， 后续命令行交互可继续执行

async function getFileInfo () {
  const fileInfo = await inquirer.prompt([
    {
      type: 'number',
      name: 'fileName',
      message: '请输入文件名',
      default: 'index',
      validate: function (input) {
        var done = this.async();
        setTimeout(function() {
          if (typeof input !== 'number') {
            done('You need to provide a number');
            return;
          }
          done(null, true);
        }, 0);
      },
      filter: v => v
    }
  ])
  return fileInfo
}

async function generateFile () {
  const a = await inquirer.prompt({
    type: 'number',
    name: 'name',
    message: 'kaiak1232132i'
  })
}

async function initializeFile () {
  try {
    const fileInfo = await getFileInfo()
    const a = await inquirer.prompt({
      type: 'number',
      name: 'name',
      message: 'kaiaki'
    })
    await generateFile()
  } catch (err) {
    console.error(err.message)
  }
}

initializeFile()


