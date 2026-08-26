// app/privacy-policy/page.tsx
import React from "react";

export const metadata = {
	title: "Privacy Policy | Strategy Apps",
	description: "Privacy Policy for our scouting application.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
	return (
		<h2
			style={{
				fontSize: "1.25rem",
				fontWeight: 700,
				marginTop: "2rem",
				marginBottom: "0.75rem",
			}}
		>
			{children}
		</h2>
	);
}

function P({ children, note = false }: { children: React.ReactNode, note?: boolean }) {
	return (
		<p style={{ margin: "0.75rem 0", lineHeight: 1.7, opacity: note ? 0.75 : 0.95 }}>
			{children}
		</p>
	);
}

function Li({ children }: { children: React.ReactNode }) {
	return <li style={{ margin: "0.35rem 0", lineHeight: 1.65 }}>{children}</li>;
}

export default function PrivacyPolicyPage() {
	const lastUpdated = "February 10, 2026";
	const teamName = "Da Vinci 4744";
	const contactEmail = "me@kfiros.com";

	return (
		<main
			style={{
				maxWidth: 920,
				margin: "0 auto",
				padding: "40px 16px 80px",
			}}
		>
			<header style={{ marginBottom: 24 }}>
				<h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 8 }}>
					Privacy Policy — Strategy Apps
				</h1>
				<p style={{ margin: 0, opacity: 0.85 }}>
					Last updated: <strong>{lastUpdated}</strong>
				</p>
			</header>

			<P>
				This Privacy Policy explains how <strong>{teamName}</strong> (“we”, “us”,
				or “our”) collects, uses, stores, and shares information when you use our
				scouting application (the “App”). By using the App, you agree to this
				Privacy Policy.
			</P>

			<SectionTitle>1. Information We Collect</SectionTitle>

			<h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginTop: 16 }}>
				A. Information you provide
			</h3>
			<P>
				Depending on how the App is configured, you may provide the following
				information:
			</P>
			<ul style={{ paddingLeft: 18, margin: "8px 0" }}>
				<Li>Display name / nickname</Li>
				<Li>Role (e.g., scout, drive coach, admin)</Li>
				<Li>Team affiliation and event participation</Li>
				<Li>
					Scouting data you enter (e.g., match performance metrics, notes,
					ratings)
				</Li>
				<Li>Authentication details, if login is enabled</Li>
			</ul>

			<h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginTop: 16 }}>
				B. Information collected automatically
			</h3>
			<P>
				When you use the App, we may collect limited technical information to
				operate and improve it, such as:
			</P>
			<ul style={{ paddingLeft: 18, margin: "8px 0" }}>
				<Li>Device identifiers (non-sensitive technical IDs)</Li>
				<Li>Device type, operating system version</Li>
				<Li>App usage data (e.g., screens viewed, performance metrics)</Li>
				<Li>Crash reports and diagnostics logs</Li>
			</ul>

			<SectionTitle>2. How We Use Information</SectionTitle>
			<P>We use the information we collect to:</P>
			<ul style={{ paddingLeft: 18, margin: "8px 0" }}>
				<Li>Provide and operate the App</Li>
				<Li>Store, synchronize, and present scouting data for your team</Li>
				<Li>Improve reliability, performance, and user experience</Li>
				<Li>Detect, prevent, and fix bugs and technical issues</Li>
				<Li>Provide support and respond to requests</Li>
			</ul>

			<SectionTitle>3. Sharing Information</SectionTitle>
			<P>
				We do <strong>not</strong> sell your personal information.
			</P>
			<P>We may share information in these cases:</P>
			<ul style={{ paddingLeft: 18, margin: "8px 0" }}>
				<Li>
					<strong>Within your team:</strong> scouting records may be visible to
					teammates, mentors, and admins, depending on permissions.
				</Li>
				<Li>
					<strong>Service providers:</strong> we may use third-party providers
					for hosting, databases, analytics, and crash reporting (only as needed
					to run the App).
				</Li>
				<Li>
					<strong>Legal:</strong> if required by law, regulation, or valid legal
					process.
				</Li>
			</ul>

			<SectionTitle>4. Data Storage & Security</SectionTitle>
			<P>
				We apply reasonable security measures to protect your information.
				However, no method of transmission or storage is 100% secure, and we
				cannot guarantee absolute security.
			</P>
			<P>
				Data may be stored in the cloud and/or locally on your device, depending
				on how the App is built (e.g., offline mode).
			</P>

			<SectionTitle>5. Data Retention</SectionTitle>
			<P>
				We retain data for as long as it is needed to support team scouting and
				historical analysis, or while accounts remain active (if applicable).
				You may request deletion (see Section 7).
			</P>

			<SectionTitle>6. Children & Students</SectionTitle>
			<P>
				The App is intended for use by robotics team members and may include
				students under 18. We aim to collect only the minimum information
				necessary for scouting and team operations. We recommend that student
				use be supervised by a mentor/coach where appropriate.
			</P>

			<SectionTitle>7. Your Rights</SectionTitle>
			<P>You may have the right to:</P>
			<ul style={{ paddingLeft: 18, margin: "8px 0" }}>
				<Li>Request access to information we hold about you</Li>
				<Li>Request corrections of inaccurate information</Li>
				<Li>Request deletion of your information (when applicable)</Li>
				<Li>Stop using the App at any time</Li>
			</ul>
			<P>
				To make a request, contact us at:{" "}
				<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
			</P>

			<SectionTitle>8. Changes to This Policy</SectionTitle>
			<P>
				We may update this Privacy Policy from time to time. If we make material
				changes, we will post the updated policy on this page and update the
				“Last updated” date above.
			</P>

			<SectionTitle>9. Contact</SectionTitle>
			<P>
				If you have questions about this Privacy Policy, contact:{" "}
				<strong>{teamName}</strong> —{" "}
				<a href={`mailto:${contactEmail}`}>{contactEmail}</a>
			</P>

			<hr style={{ margin: "40px 0", opacity: 0.2 }} />

			<P note>
				Note: This template is provided for convenience and is not legal advice.
				If you need compliance with specific laws (e.g., GDPR/CCPA), consider
				getting legal guidance.
			</P>
		</main>
	);
}
