import React from 'react';

const AllWebtoon = () => {
    return (
        <table role="grid">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                    <th scope="col">Heading</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                    <td>Cell</td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Cell</td>
                    <td></td>
                    <td>Cell</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th scope="col">#</th>
                    <td scope="col">Total</td>
                    <td scope="col">Total</td>
                    <td scope="col">Total</td>
                    <td scope="col">Total</td>
                    <td scope="col">Total</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default AllWebtoon;