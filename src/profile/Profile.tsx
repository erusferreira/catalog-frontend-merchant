import {
  StyledWrapper,
  StyledMainBody,
  StyledCard,
  StyledCardBody,
  StyledImage,
  StyledSummary,
  StyledDetailRow,
  StyledDetailColumn,
  StyledHR
} from "./styled"

export default function Profile() {

  return (
    <>
      <StyledWrapper>
        <StyledMainBody>
          <StyledCard>
            <StyledCardBody>
              <StyledImage
                src="https://cdn-icons-png.flaticon.com/512/869/869432.png"
                alt="Merchant"
                width="120" />
              <StyledSummary>
                <h4>Company short name</h4>
                <p className="text-secondary mb-1">Address</p>
                <p className="text-muted font-size-sm">CNPJ</p>
              </StyledSummary>
            </StyledCardBody>
          </StyledCard>

          
          <StyledCard $details>
            <StyledCardBody>
              <StyledDetailRow>
                <StyledDetailColumn $name>
                  Full company name
                </StyledDetailColumn>
                <StyledDetailColumn>
                  Lorem ipsum LTDA
                </StyledDetailColumn>
              </StyledDetailRow>
              <StyledHR/>

              <StyledDetailRow>
                <StyledDetailColumn $name>
                  Owner
                </StyledDetailColumn>
                <StyledDetailColumn>
                Owner name
                </StyledDetailColumn>
              </StyledDetailRow>
              <StyledHR/>

              <StyledDetailRow>
                <StyledDetailColumn $name>
                  Status
                </StyledDetailColumn>
                <StyledDetailColumn>
                  Is active
                </StyledDetailColumn>
              </StyledDetailRow>
              <StyledHR/>

              <StyledDetailRow>
                <StyledDetailColumn $name>
                  Created At
                </StyledDetailColumn>
                <StyledDetailColumn>
                01/01/2023
                </StyledDetailColumn>
              </StyledDetailRow>
              <StyledHR/>

            </StyledCardBody>
          </StyledCard>
        </StyledMainBody>
      </StyledWrapper>
    </>
  )
}
