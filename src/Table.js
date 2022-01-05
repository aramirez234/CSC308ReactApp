import React from 'react';

function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <body>
                <tr>
                    <td>Charlie</td>
                    <td>Janitor</td>
                </tr>
                <tr>
                    <td>Mac</td>
                    <td>Bouncer</td>
                </tr>
                <tr>
                    <td>Dee</td>
                    <td>Aspiring actress</td>
                </tr>
                <tr>
                    <td>Dennis</td>
                    <td>Bartender</td>
                </tr>
            </body>
        </table>
    );
}

export default Table;