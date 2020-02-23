import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function SimpleTable(props) {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        setColumns(props.headerData);
    }, [props.data])

    return (
        <>
            {
                props.data && props.data.length > 0 ? (
                    <View style={styles.table} >
                        {props.headerData && props.headerData.map(hd => (
                            <Text style={[styles.tableText, { width: hd.size, backgroundColor: '#c0c0c0' }]}>{hd.name}</Text>

                        ))}
                    </View>
                ) :
                    <Text style={[{ fontSize: 10, textAlign: 'center', }]}>List Empty</Text>
            }
            {
                props.data && props.data.map(item => (
                    <View style={styles.table}>
                        {props.columnData && props.columnData.map((hd, index) => (
                            <Text style={[styles.tableText, { width: columns && columns[index] && columns[index].size }]}>{item[hd]}{}</Text>

                        ))}
                    </View>
                ))
            }
        </>
    )
}


const styles = StyleSheet.create({
    table: {
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'row',


    },
    tableText: {
        padding: 0,
        fontSize: 10,
    },
})
