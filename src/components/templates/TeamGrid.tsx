/**
 * TeamGrid - RICH GENERIC
 * Responsive team member grid with profile images, titles, LinkedIn links, and bios
 * NO ENGLISH DEFAULTS — All content from JSON
 */

import React from 'react';
import { ArrowRight, LucideIcon, Zap, Linkedin, Mail, ExternalLink } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { notifyTele } from '@/utils/acknowledgmentHelpers';
import { useSound } from '@/hooks/useSound';
import { SmartImage } from '@/components/ui/SmartImage';

interface Member {
    name: string;
    role?: string;
    imageUrl?: string;
    imagePrompt?: string;
    bio?: string;
    linkedinUrl?: string;
    email?: string;
    actionPhrase?: string;
}

interface TeamGridProps {
    icon?: string;
    badge?: string;
    headline?: string;
    subtitle?: string;
    members?: Member[];
    columns?: 1 | 2 | 3;
    ctaLabel?: string;
    ctaActionPhrase?: string;
}

const getIcon = (iconName?: string): LucideIcon => {
    if (!iconName) return Zap;
    const icons = LucideIcons as unknown as Record<string, LucideIcon>;
    return icons[iconName] || Zap;
};

const getGridCols = (columns: number) => {
    switch (columns) {
        case 1: return 'grid-cols-1';
        case 2: return 'grid-cols-1 sm:grid-cols-2';
        case 3:
        default: return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
    }
};

export const TeamGrid: React.FC<TeamGridProps> = ({
    icon,
    badge,
    headline,
    subtitle,
    members = [],
    columns = 3,
    ctaLabel,
    ctaActionPhrase,
}) => {
    const { playClick } = useSound();
    const handleAction = (phrase: string) => { playClick(); notifyTele(phrase); };

    const HeaderIcon = getIcon(icon);

    return (
        <div className="glass-medium rounded-2xl p-4 md:p-6 h-full flex flex-col">
            {/* Header Section */}
            {(badge || icon || headline || subtitle) && (
                <div className="mb-8">
                    {(badge || icon) && (
                        <div className="flex items-center gap-3 mb-4">
                            {icon && (
                                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center">
                                    <HeaderIcon className="w-6 h-6 text-[var(--color-primary)]" />
                                </div>
                            )}
                            {badge && (
                                <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                                    {badge}
                                </span>
                            )}
                        </div>
                    )}
                    {headline && <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{headline}</h2>}
                    {subtitle && <p className="text-mist/60 mt-2">{subtitle}</p>}
                </div>
            )}

            {/* Members Grid */}
            {members.length > 0 && (
                <div className={`grid ${getGridCols(columns)} gap-6 flex-grow`}>
                    {members.map((member, index) => {
                        const hasImage = member.imageUrl || member.imagePrompt;

                        return (
                            <div
                                key={index}
                                onClick={() => member.actionPhrase && handleAction(member.actionPhrase)}
                                className={`group flex flex-col items-center text-center rounded-2xl glass-medium overflow-hidden p-6
                                    ${member.actionPhrase ? 'cursor-pointer hover:border-[var(--color-secondary)]/30' : ''}
                                    transition-all`}
                            >
                                {/* Profile Image */}
                                <div className="relative w-28 h-28 rounded-full overflow-hidden mb-5 ring-2 ring-[var(--color-primary)]/20 group-hover:ring-[var(--color-primary)]/40 transition-all">
                                    {hasImage ? (
                                        <SmartImage
                                            assetId={member.imageUrl || member.imagePrompt || `member-${index}`}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                                            <span className="text-3xl font-bold text-[var(--color-primary)]/60">
                                                {member.name?.charAt(0)?.toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Name */}
                                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>

                                {/* Role */}
                                {member.role && (
                                    <p className="text-sm text-[var(--color-primary)] font-medium mb-3">{member.role}</p>
                                )}

                                {/* Bio */}
                                {member.bio && (
                                    <p className="text-sm text-mist/50 leading-relaxed mb-4 flex-grow">{member.bio}</p>
                                )}

                                {/* Social Links */}
                                {(member.linkedinUrl || member.email) && (
                                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06] w-full justify-center">
                                        {member.linkedinUrl && (
                                            <a
                                                href={member.linkedinUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 
                                                    flex items-center justify-center hover:bg-[var(--color-primary)]/20 transition-colors"
                                            >
                                                <Linkedin className="w-4 h-4 text-[var(--color-primary)]" />
                                            </a>
                                        )}
                                        {member.email && (
                                            <a
                                                href={`mailto:${member.email}`}
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 
                                                    flex items-center justify-center hover:bg-[var(--color-primary)]/20 transition-colors"
                                            >
                                                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                                            </a>
                                        )}
                                    </div>
                                )}

                                {/* Action Arrow */}
                                {member.actionPhrase && (
                                    <div className="mt-3 flex items-center gap-2">
                                        <ArrowRight className="w-4 h-4 text-mist/20 group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Footer CTA */}
            {ctaLabel && ctaActionPhrase && (
                <div className="pt-8 flex justify-end">
                    <button
                        className="inline-flex items-center gap-3 px-8 py-4 bg-flamingo text-white font-semibold rounded-full 
                            hover:bg-flamingo/90 hover:scale-[1.02] active:scale-[0.98]
                            transition-all duration-200 text-lg shadow-lg shadow-flamingo/20"
                        onClick={() => handleAction(ctaActionPhrase)}
                    >
                        {ctaLabel}
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default TeamGrid;
