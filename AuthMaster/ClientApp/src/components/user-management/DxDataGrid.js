import React from 'react';
import DataGrid, {
    Column,
    Button,
    Editing,
    Pager,
    Paging,
    Popup,
    Form,
    Lookup
} from 'devextreme-react/data-grid';
import { users } from '../../data';

function DxDataGrid() {


    function picRender(data) {
        const imagePath = require(`../../assets/images/${data.value}`).default;
        return <img src={imagePath} alt="pic" height="200px" width="200px"/>;
    }

    return (
        <>
            <DataGrid
                dataSource={users}
                keyExpr="id"
                showBorders={false}
                showColumnLines={false}
                showRowLines={true}
            >
                <Column dataField="pic"
                    allowSorting={false}
                    cellRender={picRender} />
                <Column dataField="firstName" />
                <Column dataField="lastName" />
                <Column dataField="team" />
                <Column dataField="role" />
                <Column dataField="isActive" />
                <Column type="buttons">
                    <Button
                        icon="chevronright"
                        stylingMode="contained"
                        type="normal"
                    />
                </Column>
            </DataGrid>
        </>
    )
}
export default DxDataGrid;