const TelegramBot = require('node-telegram-bot-api');
const token = '';
const bot = new TelegramBot(token, {polling: true});
const diractory = 'D:/Qt/Third course/2 sem';
const START_COMMAND = '/start';
const KEYBOARD_COMMAND = '/keyboard';
const KEYBOARD_COMMAND_LP = 'lp';
const KEYBOARD_COMMAND_BPD = 'bpd';
const KEYBOARD_COMMAND_KPZ = 'kpz';
const KEYBOARD_COMMAND_MPPZ = 'mppz';
const KEYBOARD_COMMAND_PP = 'pp';
const KEYBOARD_COMMAND_OKM = 'okm';


bot.onText(new RegExp(`(.*)`), (msg, [source, match]) =>
{
    const { chat:{id}} = msg;

    switch (match){
      case START_COMMAND:
      bot.sendMessage(id, 'Choose predmet', {
        reply_markup: {
          keyboard: [
            [
              {
                text: `${KEYBOARD_COMMAND_LP}`
              },
              {
                text: `${KEYBOARD_COMMAND_BPD}`
              },
              {
                text: `${KEYBOARD_COMMAND_KPZ}`
              }
            ],

            [
              {
                text: `${KEYBOARD_COMMAND_MPPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_PP}`
              },
              {
                text: `${KEYBOARD_COMMAND_OKM}`
              }
            ]
          ]
        }
      })
      break
      case KEYBOARD_COMMAND_LP:
      var LP_results = [];
      LP1 = diractory+'/LP/ЛП_1.docx';
      LP_results.push(LP1);
    for(var i = 0; i<LP_results.length; i++)
    {
      bot.sendDocument(id, `${LP_results[i]}`);
    }
      bot.sendMessage(id, 'Еще копипаста?', {
        reply_markup: {
          keyboard: [
            [
              {
                text: `${KEYBOARD_COMMAND_BPD}`
              },
              {
                text: `${KEYBOARD_COMMAND_KPZ}`
              }
            ],

            [
              {
                text: `${KEYBOARD_COMMAND_MPPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_PP}`
              },
              {
                text: `${KEYBOARD_COMMAND_OKM}`
              }
            ]
          ]
        }
      })
      break

      case KEYBOARD_COMMAND_BPD:
      var BPD_results = [];
      BPD2 = diractory+'/БПД/БПтаД/БПД_2.docx';
      BPD_results.push(BPD2);

      BPD3 = diractory+'/БПД/БПтаД/БПД_3.docx';
      BPD_results.push(BPD3);
      BPD5 = diractory+'/БПД/БПтаД/БПД_5.docx';
      BPD_results.push(BPD5);

    for(var i = 0; i<BPD_results.length; i++)
    {
      bot.sendDocument(id, `${BPD_results[i]}`);
    }
      bot.sendMessage(id, 'Еще копипаста?', {
        reply_markup: {
          keyboard: [
            [
              {
                text: `${KEYBOARD_COMMAND_LP}`
              },
              {
                text: `${KEYBOARD_COMMAND_KPZ}`
              }
            ],

            [
              {
                text: `${KEYBOARD_COMMAND_MPPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_PP}`
              },
              {
                text: `${KEYBOARD_COMMAND_OKM}`
              }
            ]
          ]
        }
      })
      break

      case KEYBOARD_COMMAND_KPZ:
      var KPZ_results = [];
      KPZ1 = diractory+'/КПЗ/КПЗ_1.docx';
      KPZ_results.push(KPZ1);
      KPZ2 = diractory+'/КПЗ/КПЗ_2.docx';
      KPZ_results.push(KPZ2);
      KPZ3 = diractory+'/КПЗ/КПЗ_3.docx';
      KPZ_results.push(KPZ3);
      KPZ4 = diractory+'/КПЗ/КПЗ_4.docx';
      KPZ_results.push(KPZ4);

    for(var i = 0; i<KPZ_results.length; i++)
    {
      bot.sendDocument(id, `${KPZ_results[i]}`);
    }
      bot.sendMessage(id, 'Еще копипаста?', {
        reply_markup: {
          keyboard: [
            [
              {
                text: `${KEYBOARD_COMMAND_LP}`
              },
              {
                text: `${KEYBOARD_COMMAND_BPD}`
              }
            ],

            [
              {
                text: `${KEYBOARD_COMMAND_MPPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_PP}`
              },
              {
                text: `${KEYBOARD_COMMAND_OKM}`
              }
            ]
          ]
        }
      })
      break

      case KEYBOARD_COMMAND_MPPZ:
      var MPPZ_results = [];
      MPPZ1 = diractory+'/МППЗ/MPPZ_1.docx';
      MPPZ_results.push(MPPZ1);
      MPPZ2 = diractory+'/МППЗ/MPPZ_2.docx';
      MPPZ_results.push(MPPZ2);
      MPPZ3 = diractory+'/МППЗ/MPPZ_3.docx';
      MPPZ_results.push(MPPZ3);
      MPPZ4 = diractory+'/МППЗ/MPPZ_4.docx';
      MPPZ_results.push(MPPZ4);
      MPPZ5 = diractory+'/МППЗ/MPPZ_5.docx';
      MPPZ_results.push(MPPZ5);
      MPPZ6 = diractory+'/МППЗ/MPPZ_6.docx';
      MPPZ_results.push(MPPZ6);
      MPPZ7 = diractory+'/МППЗ/MPPZ_7.docx';
      MPPZ_results.push(MPPZ7);
      MPPZ8 = diractory+'/МППЗ/MPPZ_8.docx';
      MPPZ_results.push(MPPZ8);

    for(var i = 0; i<MPPZ_results.length; i++)
    {
      bot.sendDocument(id, `${MPPZ_results[i]}`);
    }
      bot.sendMessage(id, 'Еще копипаста?', {
        reply_markup: {
          keyboard: [
            [
              {
                text: `${KEYBOARD_COMMAND_LP}`
              },
              {
                text: `${KEYBOARD_COMMAND_BPD}`
              }
            ],

            [
              {
                text: `${KEYBOARD_COMMAND_KPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_PP}`
              },
              {
                text: `${KEYBOARD_COMMAND_OKM}`
              }
            ]
          ]
        }
      })
      break

      case KEYBOARD_COMMAND_PP:
      var PP_results = [];
      PP1 = diractory+'/Проект П/ПП_1.docx';
      PP_results.push(PP1);
      PP2 = diractory+'/Проект П/ПП_2.docx';
      PP_results.push(PP2);
      PP3 = diractory+'/Проект П/ПП_3.docx';
      PP_results.push(PP3);
      PP4 = diractory+'/Проект П/ПП_4.docx';
      PP_results.push(PP4);

    for(var i = 0; i<PP_results.length; i++)
    {
      bot.sendDocument(id, `${PP_results[i]}`);
    }
      bot.sendMessage(id, 'Еще копипаста?', {
        reply_markup: {
          keyboard: [
            [
              {
                text: `${KEYBOARD_COMMAND_LP}`
              },
              {
                text: `${KEYBOARD_COMMAND_BPD}`
              }
            ],

            [
              {
                text: `${KEYBOARD_COMMAND_KPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_MPPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_OKM}`
              }
            ]
          ]
        }
      })
      break

      case KEYBOARD_COMMAND_OKM:
      var OKM_results = [];
      OKM1 = diractory+'/ОКМ/OKM__1.docx';
      OKM_results.push(OKM1);
      OKM2 = diractory+'/ОКМ/OKM_2.docx';
      OKM_results.push(OKM2);
      OKM3 = diractory+'/ОКМ/OKM_3.docx';
      OKM_results.push(OKM3);

    for(var i = 0; i<OKM_results.length; i++)
    {
      bot.sendDocument(id, `${OKM_results[i]}`);
    }
      bot.sendMessage(id, 'Еще копипаста?', {
        reply_markup: {
          keyboard: [
            [
              {
                text: `${KEYBOARD_COMMAND_LP}`
              },
              {
                text: `${KEYBOARD_COMMAND_BPD}`
              }
            ],

            [
              {
                text: `${KEYBOARD_COMMAND_KPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_MPPZ}`
              },
              {
                text: `${KEYBOARD_COMMAND_PP}`
              }
            ]
          ]
        }
      })
      break
      default:
      bot.sendMessage(id, 'Хватит копипаста!');
    }
})
