import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../app/app.js';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

chai.use(chaiHttp);

describe('API request', () => {

  describe('GET /', () => {
    it('should return 200', done => {
      chai.request(app)
        .get('/')
        .end((error, response) => {
          expect(response).to.have.status(200);
          expect(response.body).to.be.empty;
          done();
        });
    });
  });

  describe('GET /companies', () => {
    it('should return 200 with a list of companies', done => {
      const companies = fs.readFileSync(resolve(__dirname, '../resources/companies.json'), 'utf-8');

      chai.request(app)
        .get('/companies')
        .end((error, response) => {
          expect(response).to.be.json;
          expect(response).to.have.status(200);
          expect(response.body).to.be.an('array').and.to.have.length.above(1);
          expect(response.body).to.deep.equal(JSON.parse(companies));
          done();
        });
    });
  });

});
