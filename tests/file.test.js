import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import ResultTable from '../src/components/ResultTable';
import expectExport from 'expect';

afterEach(cleanup)

it("ResultTable changes after click on 'search'", () => {
    const { getByTestId } = render(
    <ResultTable/>
    );

    expectExport()
});