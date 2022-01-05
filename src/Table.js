import React from 'react';

function Table() {
    return (
        <table>
            <TableHeader />
            <TableBody /> 
        </table>
    );
}


function TableHeader()
{
    return (
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
    );
}

function TableBody()
{
    return(<body>
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
    </body>);

}

export default Table;