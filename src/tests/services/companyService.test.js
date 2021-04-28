import { describe, it } from 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';

import { promises as fs } from 'fs';
import companyService from '../../app/services/companyService.js';

chai.use(spies);

describe('companyService::findAll', () => {

  it('should read file and parse JSON', async () => {
    const fsSpy = chai.spy.on(fs, 'readFile');
    const jsonSpy = chai.spy.on(JSON, 'parse');

    const companies = await companyService.findAll();

    expect(fsSpy).to.have.been.called.once;
    expect(jsonSpy).to.have.been.called.once;

    expect(companies).to.be.an('array').with.lengthOf.above(1);

    companies.forEach(company => {
      expect(company).to.have.property('name');
      expect(company).to.have.property('logo');
      expect(company).to.have.property('address');
      expect(company).to.have.property('website');
      expect(company).to.have.property('specialties');
    });
  });

});
