import React, {Component} from 'react'

const TableHeader = () => {
    return <thead />
}
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button className='btn btn-danger' onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const {characterData, removeCharacter} = props
    return (
        <table className='table'>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table