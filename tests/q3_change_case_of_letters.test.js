/*eslint-disable*/

const { changeCaseByFunction, changeCaseByArrow } = require('../q3_change_case_of_letters');


describe('General Statements', () => {

    test('NORMAL FUNCTION', () =>{
        expect(changeCaseByFunction('MeRRy hAD a LITTle lAMp')).toEqual('mErrY Had A littLE LamP');
        expect(changeCaseByFunction('Hello World')).toEqual('hELLO wORLD');
    });
    
    test('ARROW FUNCTION', () =>{
        expect(changeCaseByArrow('MeRRy hAD a LITTle lAMp')).toEqual('mErrY Had A littLE LamP');
        expect(changeCaseByArrow('Hello World')).toEqual('hELLO wORLD');
    });
});

describe('Strings with special characters', () => {

    test('NORMAL FUNCTION', () =>{
        expect(changeCaseByFunction('MeRRy @hAD a LITTle lAMp')).toEqual('mErrY @Had A littLE LamP');
        expect(changeCaseByFunction('Hello Worl!123d')).toEqual('hELLO wORL!123D');
    });
    
    test('ARROW FUNCTION', () =>{
        expect(changeCaseByArrow('MeRRy @hAD a LITTle lAMp')).toEqual('mErrY @Had A littLE LamP');
        expect(changeCaseByArrow('Hello Worl!123d')).toEqual('hELLO wORL!123D');
    });
});

