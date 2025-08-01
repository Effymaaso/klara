
'use client';

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Shield, Star, Cog, CreditCard } from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";


function SettingsSidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
    const baseClasses = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary cursor-pointer";
    const activeClasses = "bg-muted text-primary";
    
    return (
         <div className="hidden border-r bg-muted/40 md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link href="/" className="flex items-center gap-2 font-semibold">
                        <Cog className="h-6 w-6" />
                        <span>Settings</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        <a onClick={() => setActiveTab('account')} className={`${baseClasses} ${activeTab === 'account' ? activeClasses : ''}`}>
                            <User className="h-4 w-4" />
                            Account
                        </a>
                        <a onClick={() => setActiveTab('membership')} className={`${baseClasses} ${activeTab === 'membership' ? activeClasses : ''}`}>
                            <Star className="h-4 w-4" />
                            Membership
                        </a>
                         <a onClick={() => setActiveTab('privacy')} className={`${baseClasses} ${activeTab === 'privacy' ? activeClasses : ''}`}>
                            <Shield className="h-4 w-4" />
                            Privacy
                        </a>
                        <a onClick={() => setActiveTab('advanced')} className={`${baseClasses} ${activeTab === 'advanced' ? activeClasses : ''}`}>
                            <Cog className="h-4 w-4" />
                            Advanced
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");

  const renderContent = () => {
    switch (activeTab) {
        case "account":
            return (
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile</CardTitle>
                            <CardDescription>Update your personal information.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue="john.doe@example.com" disabled />
                            </div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Payment & Billing</CardTitle>
                            <CardDescription>Manage your payment methods and view your billing history.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <div className="flex items-center justify-between p-4 border rounded-lg">
                               <div className="flex items-center gap-4">
                                   <CreditCard className="h-8 w-8 text-muted-foreground" />
                                   <div>
                                       <p className="font-medium">Visa ending in 1234</p>
                                       <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                                   </div>
                               </div>
                               <Button variant="outline">Manage</Button>
                           </div>
                           <Link href="#">
                             <Button variant="link" className="p-0">View Billing History</Button>
                           </Link>
                        </CardContent>
                    </Card>
                </div>
            );
        case "membership":
            return (
                 <Card>
                    <CardHeader>
                        <CardTitle>Membership</CardTitle>
                        <CardDescription>Manage your subscription and usage.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <div>
                            <h3 className="font-medium">Current Plan: Pro</h3>
                            <p className="text-sm text-muted-foreground">Your plan renews on July 31, 2024.</p>
                       </div>
                       <div>
                            <Label>Remaining Tokens</Label>
                            <div className="h-2 w-full rounded-full bg-muted mt-2">
                                <div className="h-2 rounded-full bg-primary" style={{width: "85%"}}></div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">85 / 100 generations used this month.</p>
                       </div>
                        <Link href="/buy-tokens">
                            <Button variant="outline">Manage Subscription</Button>
                        </Link>
                    </CardContent>
                </Card>
            );
        case "privacy":
             return (
                <Card>
                    <CardHeader>
                        <CardTitle>Privacy Settings</CardTitle>
                        <CardDescription>Control how your data is used and shared.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="data-sharing">Share Usage Data</Label>
                                <p className="text-sm text-muted-foreground">Help us improve Posterific by sharing anonymous usage data.</p>
                            </div>
                            <Switch id="data-sharing" defaultChecked />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                            <div>
                                <Label htmlFor="marketing-emails">Marketing Emails</Label>
                                <p className="text-sm text-muted-foreground">Receive updates about new features and special offers.</p>
                            </div>
                            <Switch id="marketing-emails" />
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between">
                             <div>
                                <Label htmlFor="targeted-ads">Targeted Advertising</Label>
                                <p className="text-sm text-muted-foreground">Allow us to show you more relevant ads.</p>
                            </div>
                            <Switch id="targeted-ads" defaultChecked />
                        </div>
                        <Separator />
                         <div>
                            <p className="text-sm text-muted-foreground">
                                For more detailed information, please review our <Link href="#" className="underline text-primary">Privacy Policy</Link>.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            );
        case "advanced":
             return (
                <Card>
                    <CardHeader>
                        <CardTitle>Advanced</CardTitle>
                        <CardDescription>Customize your generation settings.</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <p className="text-muted-foreground">Advanced prompt editing options coming soon.</p>
                    </CardContent>
                </Card>
            );
        default:
            return null;
    }
  }

  const pageTitles: {[key: string]: string} = {
    account: "Account Settings",
    membership: "Membership Details",
    privacy: "Privacy Options",
    advanced: "Advanced Settings"
  }
  
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col">
            <Header showAuthButtons={false} />
            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                 <div className="flex items-center">
                    <h1 className="text-lg font-semibold md:text-2xl">{pageTitles[activeTab]}</h1>
                </div>
                
                <div className="space-y-8">
                    {renderContent()}
                </div>
            </main>
        </div>
    </div>
  );
}
