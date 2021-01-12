import React from "react"
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TermsPage = ({ intl }) => (
  <Layout>
    <SEO lang={intl.locale} title={intl.formatMessage({ id: "privacy-policy" })} />
    <div className="mx-24 my-8">
        <FormattedMessage id="terms-and-conditions-text"
        values={{
          subtitle: chunks => ( 
            <p>
              <strong className="font-medium">
                {chunks}
              </strong>
            </p>
          ),
          headline: chunks => (
            <h1>
              {chunks}
            </h1>
          ),
          p: chunks => (
            <p>
              {chunks}
            </p>
          ),
          indent: chunks => (
            <div className="ml-4">
              {chunks}
            </div>
          ),
        }} />

      <p><FormattedMessage id="terms-and-conditions-text2" /> <Link to="/Contact" className="text-blue01 underline  font-medium"><FormattedMessage id="terms-and-conditions-text3" /></Link>.</p>

      <p><span className="font-medium"><FormattedMessage id="terms-and-conditions-text4" /></span> <Link to="https://urldefense.proofpoint.com/v2/url?u=HTTPS-3A__COAG.GOV_OFFICE-2DSECTIONS_CONSUMER-2DPROTECTION_CONSUMER-2DCREDIT-2DUNIT_COLLECTION-2DAGENCY-2DREGULATION_&d=DwMGaQ&c=euGZstcaTDllvimEN8b7jXrwqOf-v5A_CdpgnVfiiMM&r=y47BxePAs_nXrhp7DKQnQ4r-fIXxQ1tV9n5j7M610qLXNP_-ZOKKX1s5SrBRs84t&m=soWPyCBX-sJKTywUQQSqZlr0y4woSpGa2kL16yB6rWs&s=vQ4qTCUjlMXGcCKSxiaUe-3w76IRVjlJU697anvSuzY&e=" className="text-blue01 underline  font-medium"><FormattedMessage id="terms-and-conditions-text5" /></Link></p>

    </div>
  </Layout>
)

export default injectIntl(TermsPage)
