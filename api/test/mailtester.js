/*
@see https://mochajs.org/
@see https://nodejs.org/api/assert.html
*/
"use strict";

const
  assert = require('assert'),
  fs=require('fs'),
  testCasesObjecId = [
    {
      src: __dirname + "/../../test-letters/ham-stepic.org.eml",
      ObjecId: "5cc8161582cd8ed026085eb1"
    },
    {
      src: __dirname + "/../../test-letters/spam-GTUBE.eml",
      ObjecId: "5cc8161582cd8ed026085eb2"
    },
    {
      src: __dirname + "/../../test-letters/spam-JakobFichtl.eml",
      ObjecId: "5b18b1a182cd8eb11af1873d"
    }
  ],
  testCasesSpf = [
    {
      src: __dirname + "/../../test-letters/ham-spf-rebus3d.ru.eml",
      expect: {
        from: "noreply@rebus3d.ru",
        lastMtaIP: "94.100.179.3"
      }
    },
    {
      src: __dirname + "/../../test-letters/ham-speed24.ru.eml",
      expect: {
        from: "start@speed24.ru",
        lastMtaIP: "37.140.190.181"
      }
    },
    {
      src: __dirname + "/../../test-letters/ham-stepic.org.eml",
      expect: {
        from: "noreply@stepik.org",
        lastMtaIP: "13.69.75.239"
      }
    },
    {
      src: __dirname + "/../../test-letters/spam-GTUBE.eml",
      expect: {
        from: null,
        lastMtaIP: "193.124.185.185"
      }
    },
    {
      src: __dirname + "/../../test-letters/spam-JakobFichtl.eml",
      expect: {
        from: "noreply@guide-des-vins-de-bourgogne.fr",
        lastMtaIP: "212.170.160.112"
      }
    }
  ]
;


describe('mailtester', () => {

  describe('parse', () => {
    const
      { Mailtester } = require('../lib/Mailtester');

    for(let testCase of testCasesObjecId) {

      it('getMailObjectId', async () => {
        let raw = fs.readFileSync(testCase.src);
        let mailtester = new Mailtester();
        await mailtester.makeFromRaw(raw);

        let ObjecId = mailtester.getMailObjectId(mailtester.doc.to);
        assert.equal(ObjecId, testCase.ObjecId);
      });
    }

    for(let testCase of testCasesSpf) {

      it('SPF check data preparation', async () => {
        let raw = fs.readFileSync(testCase.src);
        let mailtester = new Mailtester();
        await mailtester.makeFromRaw(raw);

        assert.deepStrictEqual(mailtester.doc.from, testCase.expect.from);
        assert.deepStrictEqual(mailtester.doc.lastMtaIP, testCase.expect.lastMtaIP);
      });
    }


  });

});