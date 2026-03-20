const integrations = [
  "Salesforce", "Stripe", "HubSpot", "Zendesk", "Shopify", "AWS",
  "Slack", "Google Analytics", "Databricks", "Tableau", "Magento",
  "Notion", "Zapier", "Airtable", "Monday.com", "Intercom",
];

export const IntegrationsWall = () => {
  return (
    <section className="py-20 border-y border-outline-variant/10 overflow-hidden bg-surface">
      <p className="text-center font-label font-bold text-on-surface-variant uppercase tracking-[0.3em] text-xs mb-12">
        Built to scale on your stack
      </p>
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex animate-[scroll_50s_linear_infinite] w-max gap-16 hover:[animation-play-state:paused]">
          {[...integrations, ...integrations].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="text-2xl font-headline font-bold text-on-surface-variant/40 whitespace-nowrap shrink-0"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
