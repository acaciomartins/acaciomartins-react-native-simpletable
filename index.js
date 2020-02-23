import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default function SimpleTable(props) {
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        setColumns(props.headerData);
    }, [props.itemVenda])

    return (
        <>
            {
                props.itemVenda && props.itemVenda.length > 0 ? (
                    <View style={styles.tabela} >
                        {props.headerData && props.headerData.map(hd => (
                            <Text style={[styles.tabelaTexto, { width: hd.size, backgroundColor: '#c0c0c0' }]}>{hd.name}</Text>

                        ))}
                    </View>
                ) :
                    <Text style={[{ fontSize: 10, textAlign: 'center', }]}>Não há itens adicinoados</Text>
            }
            {
                props.itemVenda && props.itemVenda.map(item => (
                    <View style={styles.tabela}>
                        {props.columnData && props.columnData.map((hd, index) => (
                            <Text style={[styles.tabelaTexto, { width: columns[index].size }]}>{item[hd]}{}</Text>

                        ))}
                    </View>
                ))
            }
        </>
    )
}


const styles = StyleSheet.create({


    tabela: {
        flex: 1,
        flexWrap: 'nowrap',
        flexDirection: 'row',


    },

    tabelaTexto: {
        padding: 0,
        fontSize: 10,
    },
})
