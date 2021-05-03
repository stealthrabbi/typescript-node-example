// import { Test, TestSuite } from 'xunit.ts';
// import * as tsUnit from 'tsunit.external';
// import * as Calculations from './Scripts/Calculations';
import Calculator from '../src/calculator';
import { expect, TestSuite, Test, TestCase } from 'testyts';

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


    
    @Test()
    @TestCase("1 x 3", 1, 3, 3)
    @TestCase("4 x 5", 4, 5, 20)
    @TestCase("18 x 2", 18, 2, 36)
    public MultiCaseMultiplication(val1: number, val2: number, expectedProduct: number) {
        expect.toBeEqual(expectedProduct, Calculator.Product(val1, val2));
        // this.areIdentical(15, Calculator.Multiply(5, 3));
    }
}