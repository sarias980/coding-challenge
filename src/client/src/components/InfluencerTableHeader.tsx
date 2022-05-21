import * as React from "react"
import { Thead, Tr, Th } from '@chakra-ui/react'

export function InfluencerTableHeader() {
    return (
        <Thead>
            <Tr>
                <Th>Username</Th>
                <Th>Insagram hanlde</Th>
                <Th>Category 1</Th>
                <Th>Category 2</Th>
                <Th isNumeric>#Followers</Th>
                <Th>Audience Country</Th>
                <Th isNumeric>Avg Engagement</Th>
            </Tr>
        </Thead>
    );
}
