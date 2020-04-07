
import { gql } from 'apollo-boost';

export const GET_PORTFOLIO = gql`
  query Portfolio($id: ID) {
    portfolio (id: $id) {
      _id,
      title,
      company,
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }
`

export const GET_PORTFOLIOS = gql`
  query Portfolios {
    portfolios {
      _id,
      title,
      company,
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }`;

export const CREATE_PORTFOLIO = gql`
  mutation CreatePortfolio {
    createPortfolio(input: {
      title: "New Job"
      company: "New Company"
      companyWebsite: "New Website"
      location: "New Location"
      jobTitle: "New Job Title"
      description: "New Desc"
      startDate: "12/12/2012"
      endDate: "14/11/2013"
    }) {
      _id,
      title,
      company,
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }`;

export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: {
      title: "UPDATE Job"
      company: "UPDATE Company"
      companyWebsite: "UPDATE Website"
      location: "UPDATE Location"
      jobTitle: "UPDATE Job Title"
      description: "UPDATE Desc"
      startDate: "12/12/2012 UPDATE"
      endDate: "14/11/2013 UPDATE"
    }) {
      _id,
      title,
      company,
      companyWebsite
      location
      jobTitle
      description
      startDate
      endDate
    }
  }`;
