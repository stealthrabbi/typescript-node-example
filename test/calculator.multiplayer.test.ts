// import { Test, TestSuite } from 'xunit.ts';
// import * as tsUnit from 'tsunit.external';
// import * as Calculations from './Scripts/Calculations';
import Calculator from '../src/calculator';
import { expect, TestSuite, Test } from 'testyts';

@TestSuite()
export class CalculatorMultiplierTest {

    @Test()
    public Add() {
        expect.toBeEqual(8, Calculator.Sum(3, 5));
        // this.areIdentical(15, Calculator.Multiply(5, 3));
    }

    @Test()
    public Multiply() {
        expect.toBeEqual(15, Calculator.Product(3, 5));
        // this.areIdentical(15, Calculator.Multiply(5, 3));
    }

    @Test()
    public BadMultiply() {
        expect.toBeEqual(18, Calculator.Product(3, 5));
        // this.areIdentical(15, Calculator.Multiply(5, 3));
    }
}