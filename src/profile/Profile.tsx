import { useEffect, useState } from "react"
import { http } from "../configs/axios.config";

import { useMerchantToken, useAuthorized } from "store";
import { APIConfig } from "../configs/api.config.constant";
import { parseDate } from "utils/date";

import {
  StyledWrapper,
  StyledMainBody,
  StyledCard,
  StyledCardBody,
  StyledImage,
  StyledSummary,
  StyledFeaturedName,
  StyledDetailRow,
  StyledDetailColumn,
  StyledHR
} from "./styled"

export default function Profile() {
  const [ merchant, setMerchant ] = useState({
      name: '',
      address: '',
      cnpj: '',
      owner: '',
      status: '',
      createdAt: ''
    });
    const [ state ] = useMerchantToken();
    const [ , setAuthorized ] = useAuthorized();
  
  async function fetchApi() {
    try {
      // TO DO - Replace this magic number
      const merchantId = '655f87fd77fad23f900510b2';
      const url = APIConfig.MERCHANT.GET(merchantId);
      const { data } = await http.get(url, { headers: { Authorization: state } });
  
      if (data) {
        setMerchant({
          name: data.name,
          address: '',
          cnpj: data.cnpj,
          owner: '',
          status: data.is_active,
          createdAt: data.created_at
        })
      }
    } catch (error: any) {
      if (error.response.status == 401) {
        setAuthorized(false)
      }
      throw new Error(`Erro ao carregar catálogos: ${error}`);
    }
  }

  useEffect(() => {
    fetchApi();
  }, []);

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
                <StyledFeaturedName>
                  {merchant.name}
                </StyledFeaturedName>
                {merchant.address && <p className="text-muted font-size-sm">{merchant.address}</p>}
                <p className="text-secondary mb-1">{merchant.cnpj}</p>
              </StyledSummary>
            </StyledCardBody>
          </StyledCard>
          
          <StyledCard $details>
            <StyledCardBody>
              <StyledDetailRow>
                <StyledDetailColumn $name>
                  Nome
                </StyledDetailColumn>
                {merchant.name && <StyledDetailColumn>{merchant.name} LTDA</StyledDetailColumn>}
              </StyledDetailRow>
              <StyledHR/>

              <StyledDetailRow>
                <StyledDetailColumn $name>
                  Dono
                </StyledDetailColumn>
                <StyledDetailColumn>
                  { merchant.owner || '-'}
                </StyledDetailColumn>
              </StyledDetailRow>
              <StyledHR/>

              <StyledDetailRow>
                <StyledDetailColumn $name>
                  Status
                </StyledDetailColumn>
                <StyledDetailColumn>
                  { merchant.status ? 'Ativo' : 'Inativo'}
                </StyledDetailColumn>
              </StyledDetailRow>
              <StyledHR/>

              <StyledDetailRow>
                <StyledDetailColumn $name>
                  Data de criação
                </StyledDetailColumn>
                <StyledDetailColumn>
                 { parseDate('pt-br', merchant.createdAt) ?? '-'}
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
