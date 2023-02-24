import React from "react";
import styled from "styled-components";

interface MessageProps {
    message: string
}

const ErrorBanner = ({ message }: MessageProps) => {
    return (
        <Container>{message}</Container>
    )
}

export default ErrorBanner;

const Container = styled.div`
    background-color: red;
`