import { providers as providerDefinitions } from "@llmgateway/models";
import { Link } from "@tanstack/react-router";

import { DOCS_URL, GITHUB_URL } from "@/lib/env";
import Logo from "@/lib/icons/Logo";

export default function Footer() {
	const filteredProviders = providerDefinitions.filter(
		(p) => p.name !== "LLM Gateway",
	);

	return (
		<footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 bg-white dark:bg-black">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row md:justify-between md:items-start">
					<div className="mb-6 md:mb-0">
						<div className="flex items-center space-x-2">
							<Logo className="h-8 w-8 rounded-full text-black dark:text-white" />
							<span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
								LLM Gateway
							</span>
						</div>
						<p className="text-zinc-600 dark:text-zinc-500 text-sm mt-2">
							© {new Date().getFullYear()} LLM Gateway. All rights reserved.
						</p>
					</div>

					<div className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-zinc-700 dark:text-zinc-400">
						<div>
							<h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-white">
								Product
							</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="#features"
										className="text-sm hover:text-black dark:hover:text-white"
									>
										Features
									</a>
								</li>
								<li>
									<Link
										to="/models"
										className="text-sm hover:text-black dark:hover:text-white"
									>
										Models
									</Link>
								</li>
								<li>
									<Link
										to="/playground"
										className="text-sm hover:text-black dark:hover:text-white"
									>
										Playground
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-white">
								Resources
							</h3>
							<ul className="space-y-2">
								<li>
									<a
										href={DOCS_URL}
										target="_blank"
										className="text-sm hover:text-black dark:hover:text-white"
									>
										Documentation
									</a>
								</li>
								<li>
									<a
										href={GITHUB_URL}
										target="_blank"
										className="text-sm hover:text-black dark:hover:text-white"
									>
										GitHub
									</a>
								</li>
								<li>
									<a
										href="mailto:contact@llmgateway.io"
										target="_blank"
										className="text-sm hover:text-black dark:hover:text-white"
									>
										Contact Us
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-white">
								Compare
							</h3>
							<ul className="space-y-2">
								<li>
									<Link
										to="/compare/open-router"
										className="text-sm hover:text-black dark:hover:text-white"
									>
										OpenRouter
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-sm font-semibold mb-3 text-zinc-900 dark:text-white">
								Providers
							</h3>
							<ul className="space-y-2">
								{filteredProviders.map((provider) => (
									<li key={provider.id}>
										<Link
											to="/providers/$id"
											params={{ id: provider.id }}
											className="text-sm hover:text-black dark:hover:text-white"
										>
											{provider.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
