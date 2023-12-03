import styled from 'styled-components';

export const StyledWrapper = styled.div`
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;   
`
export const StyledMainBody = styled.div`
  padding: 15px;
  display: flex; 
`
export const StyledCard = styled.div<{ $details?: boolean }>`
  display: flex;
  flex: 1;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0,0,0,.125);
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  flex: ${props => props.$details ? "0 0 75%" : "0 0 25%"}
`

export const StyledCardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
`

export const StyledImage = styled.img`
  display: flex;
  margin: auto;
`

export const StyledSummary = styled.div`
  flex-direction: column;
  text-align: center;
`

export const StyledDetailRow = styled.div`
  display: flex;
  color: #6c757d!important;
`

export const StyledDetailColumn = styled.div<{ $name?: boolean }>`
  color: ${props => props.$name ? "#000000" : "#6c757d"};
  flex: ${props => props.$name ? "0 0 25%" : "0 0 75%"} 
`

export const StyledHR = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
`


