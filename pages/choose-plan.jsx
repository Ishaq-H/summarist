import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import {
  faFileLines,
  faHandshake,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ChoosePlan() {
  const [activePlan, setActivePlan] = useState(null);

  const handlePlanClick = (planId) => {
    setActivePlan(planId);
  };

  const accordionData = [
    {
      title: "How does the free 7-day trial work?",
      content:
        "Begin your complimentary 7-day trial with a Summarist annual membership. You are under no obligation to continue your subscription, and you will only be billed when the trial period expires. With Premium access, you can learn at your own pace and as frequently as you desire, and you may terminate your subscription prior to the conclusion of the 7-day free trial.",
    },
    {
      title:
        "Can I switch subscriptions from monthly to yearly, or yearly to monthly?",
      content:
        "While an annual plan is active, it is not feasible to switch to a monthly plan. However, once the current month ends, transitioning from a monthly plan to an annual plan is an option.",
    },
    {
      title: "What's included in the Premium plan?",
      content:
        "Premium membership provides you with the ultimate Summarist experience, including unrestricted entry to many best-selling books high-quality audio, the ability to download titles for offline reading, and the option to send your reads to your Kindle.",
    },
    {
      title: "Can I cancel during my trial or subscription?",
      content:
        "You will not be charged if you cancel your trial before its conclusion. While you will not have complete access to the entire Summarist library, you can still expand your knowledge with one curated book per day.",
    },
  ];

  return (
    <>
      <div className="plan__wrapper-main plan__wrapper-full">
        <div className="plan">
          <div className="plan__header--wrapper">
            <div className="plan__header">
              <div className="plan__title">
                Get unlimited access to many amazing books to read
              </div>
              <div className="plan__subtitle">
                Turn ordinary moments into amazing learning opportunities
              </div>
              <figure className="plan__img--mask">
                <img className="img" src="/assets/pricing-top.png" alt="" />
              </figure>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="plan__features--wrapper">
                <div className="plan__features">
                  <figure className="plan__features--icon">
                    <FontAwesomeIcon
                      className="w-[60px] h-[60px]"
                      icon={faFileLines}
                    />
                  </figure>
                  <div className="plan__features--text">
                    <span className="bold">Key ideas in few min</span> with many
                    books to read
                  </div>
                </div>
                <div className="plan__features">
                  <figure className="plan__features--icon">
                    <FontAwesomeIcon
                      className="w-[60px] h-[60px]"
                      icon={faSeedling}
                    />
                  </figure>
                  <div className="plan__features--text">
                    <span className="bold">3 million</span> people growing with
                    Summarist everyday
                  </div>
                </div>
                <div className="plan__features">
                  <figure className="plan__features--icon">
                    <FontAwesomeIcon
                      className="w-[60px] h-[60px]"
                      icon={faHandshake}
                    />
                  </figure>
                  <div className="plan__features--text">
                    <span className="bold">Precise recommendations</span>{" "}
                    collections curated by experts
                  </div>
                </div>
                <div className="plan__features"></div>
                <div className="plan__features"></div>
              </div>

              <div className="section__title">
                Choose the plan that fits you
              </div>

              <div
                className={`plan__card${
                  activePlan === "premium-yearly" ? " plan__card--active" : ""
                }`}
                id="premium-plus-yearly"
                onClick={() => handlePlanClick("premium-yearly")}
              >
                <div className="plan__card--circle">
                  <div className="plan__card--dot"></div>
                </div>
                <div className="plan__card--content">
                  <div className="plan__card--title">Premium Plus Yearly</div>
                  <div className="plan__card--price">$99.99/year</div>
                  <div className="plan__card--text">
                    7-day free trial included
                  </div>
                </div>
              </div>

              <div className="plan__card--seperator">
                <div className="plan__seperator">or</div>
              </div>

              <div
                className={`plan__card${
                  activePlan === "premium-monthly" ? " plan__card--active" : ""
                }`}
                id="premium-monthly"
                onClick={() => handlePlanClick("premium-monthly")}
              >
                <div className="plan__card--circle">
                  <div className="plan__card--dot"></div>
                </div>
                <div className="plan__card--content">
                  <div className="plan__card--title">Premium Monthly</div>
                  <div className="plan__card--price">$9.99/monthly</div>
                  <div className="plan__card--text">No trial included</div>
                </div>
              </div>

              <div className="plan__card--cta">
                <span className="btn--wrapper">
                  <button className="btn plan__card--button">
                    <span>Start your free 7 day trial</span>
                  </button>
                </span>
                <div className="plan__disclaimer">
                  Cancel your trial at any time before it ends, and you won’t be
                  charged.
                </div>
              </div>

              <div>
                <div className="faq__wrapper">
                  {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
