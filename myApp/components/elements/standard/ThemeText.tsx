/* بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    size?: number,
    color?: string
}
const ThemeText: React.FC<React.PropsWithChildren<Props>> = ({ children, size = 15, color = '#21511' }) => {

    return (
        <Text style={{
            color,
            fontSize: size
        }}  >
            {children}
        </Text>
    )
}
export default ThemeText;